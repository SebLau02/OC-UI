(function(){try{if(typeof document<`u`){var e=document.createElement(`style`);e.appendChild(document.createTextNode(`.Button-Base{border:1px solid var(--oc-primary800);border-radius:.25rem;transition:filter .1s ease-out}.Button-Base:hover{filter:brightness(.9)}.Button-Base:active{filter:brightness()}.Button-Base:disabled{filter:unset}.Input-Base{border:1px solid var(--oc-border);border-radius:.25rem;padding:.5rem}.Input-Base:focus{outline:2px solid var(--oc-borderFocus)}/*$vite$:1*/`)),document.head.appendChild(e)}}catch(e){console.error(`vite-plugin-css-injected-by-js`,e)}})();
import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
import { useEffect as r, useRef as i, useState as a } from "react";
// src/ui/Button.jsx
var o = {
	size: {
		small: { style: { padding: "0.25rem 0.5rem" } },
		md: { style: { padding: "0.5rem 1rem" } },
		large: { style: { padding: "0.75rem 1.5rem" } }
	},
	variant: {
		contained: { style: {
			backgroundColor: "var(--oc-primary500)",
			borderColor: "var(--oc-primary800)"
		} },
		outlined: { style: {
			backgroundColor: "var(--oc-light)",
			borderColor: "var(--oc-primary800)"
		} }
	}
};
function s({ children: e, style: n, size: r = "md", variant: i = "contained", className: a, ...s }) {
	return /* @__PURE__ */ t("button", {
		type: "button",
		className: `${a || ""} Button-Base`,
		style: {
			...o.size[r].style,
			...o.variant[i].style,
			...n
		},
		...s,
		children: e
	});
}
// src/ui/IconButton.jsx
var c = { variant: {
	contained: { style: {
		backgroundColor: "var(--oc-primary500)",
		borderColor: "var(--oc-primary800)"
	} },
	outlined: { style: {
		backgroundColor: "var(--oc-light)",
		borderColor: "var(--oc-primary800)"
	} },
	text: { style: {
		backgroundColor: "var(--oc-light)",
		borderColor: "inherit",
		borderWidth: 0
	} }
} };
function l({ children: e, variant: n = "contained", ...r }) {
	return /* @__PURE__ */ t("button", {
		...r,
		type: "button",
		className: "Button-Base d-flex align-center justify-center",
		style: {
			padding: "8px 8px",
			height: "fit-content",
			aspectRatio: "1 / 1",
			...c.variant[n].style,
			...r?.style
		},
		children: e
	});
}
// src/ui/Input.jsx
function u(e) {
	return /* @__PURE__ */ t("input", {
		...e,
		className: `Input-Base ${e.className || ""}`,
		style: { ...e.style }
	});
}
// src/ui/chevron.jsx
function d({ className: n, ...r }) {
	return /* @__PURE__ */ t(e, { children: /* @__PURE__ */ t("svg", {
		...r,
		width: "16",
		height: "16",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: `lucide lucide-chevron-up preview-icon ${n || ""}`,
		children: /* @__PURE__ */ t("path", { d: "m18 15-6-6-6 6" })
	}) });
}
// src/ui/Select.jsx
function f({ label: e = "", options: o, value: c, onChange: l, style: u, name: f, ...p }) {
	let { labelProps: m, menuProps: h } = p, [g, _] = a(!1), v = o.find((e) => e.value === c), y = () => {
		_(!g);
	}, b = i(null);
	return r(() => {
		if (!g) return;
		let e = (e) => {
			b.current.contains(e.target) || _(!1);
		};
		return document.addEventListener("pointerdown", e), () => document.removeEventListener("pointerdown", e);
	}, [g]), /* @__PURE__ */ n("div", {
		className: "relative",
		ref: b,
		style: u,
		children: [
			e && /* @__PURE__ */ t("label", {
				...m,
				className: `mb-1 d-block ${m?.className}`,
				children: e
			}),
			/* @__PURE__ */ n(s, {
				onClick: y,
				style: { width: "100%" },
				className: "d-flex justify-space-between align-center gap-1",
				children: [/* @__PURE__ */ t("span", { children: v?.label || "Select an option" }), /* @__PURE__ */ t(d, { className: `${g ? "rotate-0" : "rotate-180"}` })]
			}),
			g && /* @__PURE__ */ t("div", {
				...h,
				className: `${h?.className} absolute d-flex flex-column`,
				style: {
					bottom: 0,
					left: 0,
					right: 0,
					zIndex: 1,
					maxWidth: "100%",
					translate: "0 100%",
					backgroundColor: "var(--oc-light)",
					border: "1px solid var(--oc-border)",
					maxHeight: "200px",
					scrollbarWidth: "thin",
					overflow: "auto",
					...h?.style
				},
				children: o.map((e) => /* @__PURE__ */ t(s, {
					variant: v?.value === e.value ? "contained" : "outlined",
					style: { border: "none" },
					onClick: (t) => {
						l?.({
							...t,
							target: {
								...t.target,
								name: f,
								value: e.value
							}
						}), _(!1);
					},
					...e.props,
					children: e.label
				}, e.value))
			})
		]
	});
}
// src/ui/DatePicker.jsx
var p = (e) => {
	let t = new Date(2026, e, 0);
	return new Intl.DateTimeFormat("fr-FR", { month: "long" }).format(new Date(t));
}, m = (e, t, n) => {
	let r = {
		year: e,
		month: t,
		day: n
	};
	return n < 10 && (r.day = `0${n}`), t < 10 && (r.month = `0${t}`), Object.values(r).join("-");
};
function h({ labelProps: e, label: o, onChange: s, ...c }) {
	let [h, g] = a(), _ = () => {
		g(!h);
	}, v = /* @__PURE__ */ new Date(), y = v.getDate(), b = v.getMonth() + 1, x = v.getFullYear(), S = Array.from({ length: 12 }).map((e, t) => ({
		label: p(t + 1),
		value: t + 1
	})), C = Array.from({ length: 200 }).map((e, t) => {
		let n = 1900 + t;
		return {
			label: n,
			value: n
		};
	}), [w, T] = a(b), [E, D] = a(x), [O, k] = a(null), A = new Date(E, w, 0).getDate(), j = [
		{
			value: "lundi",
			label: "L"
		},
		{
			value: "mardi",
			label: "M"
		},
		{
			value: "mercredi",
			label: "M"
		},
		{
			value: "jeudi",
			label: "J"
		},
		{
			value: "vendredi",
			label: "V"
		},
		{
			value: "samedi",
			label: "S"
		},
		{
			value: "dimanche",
			label: "D"
		}
	], M = O ? m(O.year, O.month, O.day) : "", N = (e) => {
		k({
			year: E,
			month: w,
			day: e
		}), s && s({ target: {
			name: c?.name ?? "",
			value: m(E, w, e)
		} });
	}, P = new Date(E, w - 1, 1).toLocaleDateString("fr-FR", { weekday: "long" }), F = j.findIndex((e) => e.value === P), I = i(null);
	return r(() => {
		if (!h) return;
		let e = (e) => {
			I.current.contains(e.target) || g(!1);
		};
		return document.addEventListener("pointerdown", e), () => document.removeEventListener("pointerdown", e);
	}, [h]), /* @__PURE__ */ n("div", {
		className: "relative d-flex flex-column",
		ref: I,
		children: [
			/* @__PURE__ */ t("label", {
				...e,
				className: `mb-1 ${e?.className}`,
				children: o
			}),
			/* @__PURE__ */ t(u, {
				type: "date",
				value: M,
				onClick: (e) => {
					e.preventDefault(), _(e);
				},
				name: c?.name,
				onChange: (e) => {
					e.preventDefault();
				}
			}),
			h && /* @__PURE__ */ n("div", {
				className: "absolute",
				style: {
					top: "100%",
					left: 0,
					right: 0,
					zIndex: 1,
					isolation: "isolate",
					backgroundColor: "var(--oc-light)",
					border: "1px solid var(--oc-border)"
				},
				children: [/* @__PURE__ */ n("div", {
					className: "d-flex justify-space-between p-1",
					children: [/* @__PURE__ */ n("div", {
						className: "d-flex",
						children: [/* @__PURE__ */ t(f, {
							options: S,
							value: w,
							onChange: (e) => {
								T(e.target.value), k((t) => t ? {
									...t,
									month: e.target.value
								} : {
									day: y,
									month: e.target.value,
									year: E
								});
							},
							style: { minWidth: "122px" }
						}), /* @__PURE__ */ t(f, {
							options: C,
							value: E,
							onChange: (e) => {
								D(e.target.value), k((t) => t ? {
									...t,
									year: e.target.value
								} : {
									day: y,
									month: w,
									year: e.target.value
								});
							}
						})]
					}), /* @__PURE__ */ n("div", {
						className: "d-flex",
						children: [/* @__PURE__ */ t(l, {
							type: "button",
							onClick: () => {
								let e = w - 1;
								e < 1 ? (T(12), D(E - 1)) : T(e);
							},
							children: /* @__PURE__ */ t(d, { className: "rotate-270" })
						}), /* @__PURE__ */ t(l, {
							type: "button",
							onClick: () => {
								let e = w + 1;
								e > 12 ? (T(1), D(E + 1)) : T(e);
							},
							children: /* @__PURE__ */ t(d, { className: "rotate-90" })
						})]
					})]
				}), /* @__PURE__ */ n("div", {
					className: "p-1",
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(7,1fr)"
					},
					children: [
						j.map((e, n) => /* @__PURE__ */ t(l, {
							variant: "contained",
							style: { borderRadius: 0 },
							disabled: !0,
							children: e.label
						}, n)),
						Array.from({ length: F }).map((e, n) => /* @__PURE__ */ t(l, {
							variant: "outlined",
							style: { borderRadius: 0 },
							disabled: !0
						}, n)),
						Array.from({ length: A }).map((e, n) => /* @__PURE__ */ t(l, {
							variant: (O?.day || y) === n + 1 ? "contained" : "outlined",
							style: { borderRadius: 0 },
							onClick: () => N(n + 1),
							children: n + 1
						}, n))
					]
				})]
			})
		]
	});
}
// src/ui/Modal.jsx
var g = {
	backdrop: {
		backgroundColor: "var(--oc-backdrop)",
		width: "100%",
		height: "100%"
	},
	root: {
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}
};
function _({ style: e, children: n, open: r, onClose: i, ...a }) {
	if (r) return /* @__PURE__ */ t("div", {
		...a,
		style: {
			...g.root,
			...g.backdrop
		},
		onClick: i,
		children: /* @__PURE__ */ t("div", {
			style: {
				position: "absolute",
				top: "50%",
				left: "50%",
				translate: "-50% -50%",
				backgroundColor: "var(--oc-light)",
				padding: "1rem",
				borderRadius: "var(--oc-radius)",
				minWidth: 400,
				...e
			},
			tabIndex: 0,
			role: "dialog",
			"aria-modal": "true",
			onClick: (e) => e.stopPropagation(),
			children: /* @__PURE__ */ t("div", { children: n })
		})
	});
}
// src/ui/TableContainer.jsx
function v({ children: e, style: r, paginationSummary: i }) {
	return /* @__PURE__ */ n("div", {
		style: {
			width: "100%",
			border: "1px solid var(--oc-grey200)"
		},
		children: [/* @__PURE__ */ t("div", {
			style: {
				overflow: "auto",
				scrollbarWidth: "thin",
				...r
			},
			children: e
		}), i]
	});
}
// src/ui/TableRow.jsx
function y({ children: e, style: n }) {
	return /* @__PURE__ */ t("div", {
		style: {
			display: "flex",
			flexDirection: "row",
			...n
		},
		children: e
	});
}
// src/ui/Arrow.jsx
function b({ className: e, ...r }) {
	return /* @__PURE__ */ n("svg", {
		...r,
		width: "16",
		height: "16",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: `lucide lucide-move-up preview-icon ${e || ""}`,
		children: [/* @__PURE__ */ t("path", { d: "M8 6L12 2L16 6" }), /* @__PURE__ */ t("path", { d: "M12 2V22" })]
	});
}
// src/ui/TableCell.jsx
function x({ children: e, style: r, className: i, sortable: o = !1, onSort: s }) {
	let [c, u] = a("down");
	return o ? /* @__PURE__ */ n("div", {
		className: `OC-TableCell ${i}`,
		style: {
			padding: "0.8rem 0.5rem 0.8rem 1rem",
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			...r
		},
		children: [e, /* @__PURE__ */ t(l, {
			variant: "text",
			onClick: () => {
				s(c), u((e) => e === "up" ? "down" : "up");
			},
			style: { backgroundColor: "inherit" },
			children: /* @__PURE__ */ t(b, { style: { rotate: c === "up" ? "" : "180deg" } })
		})]
	}) : /* @__PURE__ */ t("div", {
		className: `OC-TableCell ${i}`,
		style: {
			padding: "0.8rem 1rem",
			...r
		},
		children: e
	});
}
// src/ui/PaginationSummary.jsx
function S({ style: e, totalCount: r, page: i, perPage: a = 5, totalPages: o, setPage: s, setPerPage: c, perPageOptions: u }) {
	let p = a * i, m = p - a + 1, h = u ?? [
		{
			label: "5",
			value: 5
		},
		{
			label: "10",
			value: 10
		},
		{
			label: "20",
			value: 20
		}
	];
	return /* @__PURE__ */ n("div", {
		style: {
			position: "sticky",
			left: 0,
			display: "flex",
			alignItems: "center",
			padding: "1rem",
			justifyContent: "end",
			gap: "2rem",
			borderTop: "1px solid var(--oc-grey200)",
			...e
		},
		children: [
			/* @__PURE__ */ n("p", { children: [
				m,
				" - ",
				p > r ? r : p,
				" ",
				"of ",
				r
			] }),
			/* @__PURE__ */ t(f, {
				options: h,
				value: a,
				onChange: (e) => c(e.target.value)
			}),
			/* @__PURE__ */ n("div", {
				style: {
					display: "flex",
					gap: "0.1rem"
				},
				children: [/* @__PURE__ */ t(l, {
					variant: "text",
					onClick: () => s(i - 1),
					disabled: i === 1,
					children: /* @__PURE__ */ t(d, { style: { rotate: "-90deg" } })
				}), /* @__PURE__ */ t(l, {
					variant: "text",
					onClick: () => s(i + 1),
					disabled: i === o,
					children: /* @__PURE__ */ t(d, { style: { rotate: "90deg" } })
				})]
			})
		]
	});
}
// src/theme/createTheme.js
var C = (e) => {
	let { palette: t, ...n } = e;
	return {
		palette: {
			...w(L(e.palette.primary), "primary"),
			...w(L(e.palette.grey), "grey"),
			primary: "#5c7d0e",
			dark: "#1d2b3a",
			dark800: "#3b4a5a",
			secondary: "white",
			darkBlue: "#0f1e2e",
			light: "#f6f8f3",
			grey: "#5a6b7b",
			backdrop: "rgba(0, 0, 0, 0.5)",
			borderLight: "#dde3e9",
			border: "#7d8b99",
			borderFocus: "#5c7d0e",
			...t
		},
		radius: "8px",
		...n
	};
}, w = (e, t) => {
	let n = {};
	return Object.entries(e).map(([e, r]) => {
		n[`${t}${e}`] = r;
	}), n;
}, T = {
	100: 3 ** (1 / 5),
	200: 3 ** (2 / 5),
	300: 3 ** (3 / 5),
	400: 3 ** (4 / 5),
	500: 3,
	600: 4.5,
	700: 7,
	800: 7 / 4.5 * 7,
	900: 7 * (7 / 4.5) ** 2
}, E = (e) => e <= .04045 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4, D = (e) => e <= .0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - .055, O = (e) => {
	let t = e.replace("#", "");
	t.length === 3 && (t = [...t].map((e) => e + e).join(""));
	let [n, r, i] = [
		0,
		2,
		4
	].map((e) => E(parseInt(t.slice(e, e + 2), 16) / 255)), a = Math.cbrt(.4122214708 * n + .5363325363 * r + .0514459929 * i), o = Math.cbrt(.2119034982 * n + .6806995451 * r + .1073969566 * i), s = Math.cbrt(.0883024619 * n + .2817188376 * r + .6299787005 * i), c = .2104542553 * a + .793617785 * o - .0040720468 * s, l = 1.9779984951 * a - 2.428592205 * o + .4505937099 * s, u = .0259040371 * a + .7827717662 * o - .808675766 * s;
	return [
		c,
		Math.hypot(l, u),
		Math.atan2(u, l) * 180 / Math.PI
	];
}, k = (e, t, n) => {
	let r = t * Math.cos(n * Math.PI / 180), i = t * Math.sin(n * Math.PI / 180), a = (e + .3963377774 * r + .2158037573 * i) ** 3, o = (e - .1055613458 * r - .0638541728 * i) ** 3, s = (e - .0894841775 * r - 1.291485548 * i) ** 3;
	return [
		4.0767416621 * a - 3.3077115913 * o + .2309699292 * s,
		-1.2684380046 * a + 2.6097574011 * o - .3413193965 * s,
		-.0041960863 * a - .7034186147 * o + 1.707614701 * s
	];
}, A = (e) => e.every((e) => e >= -1e-4 && e <= 1.0001), j = (e, t, n) => {
	if (A(k(e, t, n))) return k(e, t, n);
	let r = 0, i = t;
	for (let t = 0; t < 20; t++) {
		let t = (r + i) / 2;
		A(k(e, t, n)) ? r = t : i = t;
	}
	return k(e, r, n);
}, M = ([e, t, n]) => .2126 * e + .7152 * t + .0722 * n, N = (e) => 1.05 / (M(e) + .05), P = (e) => e.map((e) => E(Math.round(Math.min(1, Math.max(0, D(e))) * 255) / 255)), F = (e) => "#" + e.map((e) => Math.round(Math.min(1, Math.max(0, D(e))) * 255).toString(16).padStart(2, "0")).join(""), I = (e, t, n) => {
	let r = 0, i = 1;
	for (let a = 0; a < 30; a++) {
		let a = (r + i) / 2;
		N(P(j(a, n(a), t))) > e ? r = a : i = a;
	}
	return {
		L: r,
		hex: F(j(r, n(r), t))
	};
}, L = (e) => {
	let [, t, n] = O(e), r = I(T[500], n, () => t).L, i = I(T[700], n, () => t).L, a = (e) => e > r ? t * (1 - e) / (1 - r) : e < i ? t * e / i : t;
	return Object.fromEntries(Object.entries(T).map(([e, t]) => [e, I(t, n, a).hex]));
};
// src/theme/ThemeProvider.jsx
function R({ theme: e, children: n }) {
	let r = {};
	return Object.entries(e.palette).forEach(([e, t]) => {
		r[`--oc-${e}`] = t;
	}), /* @__PURE__ */ t("div", {
		style: {
			...r,
			"--oc-radius": e.radius
		},
		children: n
	});
}
export { s as Button, h as DatePicker, l as IconButton, u as Input, _ as Modal, S as PaginationSummary, f as Select, x as TableCell, v as TableContainer, y as TableRow, R as ThemeProvider, C as createTheme };
