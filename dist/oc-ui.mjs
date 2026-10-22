(function(){try{if(typeof document<`u`){var e=document.createElement(`style`);e.appendChild(document.createTextNode(`.Button-Base{border:1px solid var(--oc-primary800);border-radius:.25rem;transition:filter .1s ease-out}.Button-Base:hover{filter:brightness(.9)}.Button-Base:active{filter:brightness()}.Button-Base:disabled{filter:unset}.Input-Base{border:1px solid var(--border);border-radius:.25rem;padding:.5rem}.Input-Base:focus{outline:2px solid var(--border-focus)}/*$vite$:1*/`)),document.head.appendChild(e)}}catch(e){console.error(`vite-plugin-css-injected-by-js`,e)}})();
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
			...c.variant[n].style,
			...r?.style
		},
		children: e
	});
}
// src/ui/Input.jsx
function u(e) {
	return /* @__PURE__ */ t("input", {
		className: `Input-Base ${e.className || ""}`,
		style: { ...e.style },
		...e
	});
}
// ../HRNet/src/components/icons/chevron/chevron.jsx
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
function f({ label: e = "", options: o, value: c, onChange: l, style: u, ...f }) {
	let { labelProps: p, menuProps: m } = f, [h, g] = a(!1), _ = o.find((e) => e.value === c), v = () => {
		g(!h);
	}, y = i(null);
	return r(() => {
		if (!h) return;
		let e = (e) => {
			y.current.contains(e.target) || g(!1);
		};
		return document.addEventListener("pointerdown", e), () => document.removeEventListener("pointerdown", e);
	}, [h]), /* @__PURE__ */ n("div", {
		className: "relative",
		ref: y,
		style: u,
		children: [
			e && /* @__PURE__ */ t("label", {
				...p,
				className: `mb-1 d-block ${p?.className}`,
				children: e
			}),
			/* @__PURE__ */ n(s, {
				onClick: v,
				style: { width: "100%" },
				className: "d-flex justify-space-between align-center gap-1",
				children: [/* @__PURE__ */ t("span", { children: _?.label || "Select an option" }), /* @__PURE__ */ t(d, { className: `${h ? "rotate-0" : "rotate-180"}` })]
			}),
			h && /* @__PURE__ */ t("div", {
				...m,
				className: `${m?.className} absolute d-flex flex-column`,
				style: {
					bottom: 0,
					left: 0,
					right: 0,
					zIndex: 1,
					maxWidth: "100%",
					translate: "0 100%",
					backgroundColor: "var(--light)",
					border: "1px solid var(--border)",
					maxHeight: "200px",
					scrollbarWidth: "thin",
					overflow: "auto",
					...m?.style
				},
				children: o.map((e) => /* @__PURE__ */ t(s, {
					variant: _?.value === e.value ? "contained" : "outlined",
					style: { border: "none" },
					onClick: () => {
						l?.(e.value), g(!1);
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
	}, v = /* @__PURE__ */ new Date(), y = v.getMonth() + 1, b = v.getFullYear(), x = Array.from({ length: 12 }).map((e, t) => ({
		label: p(t + 1),
		value: t + 1
	})), S = Array.from({ length: 200 }).map((e, t) => {
		let n = 1900 + t;
		return {
			label: n,
			value: n
		};
	}), [C, w] = a(y), [T, E] = a(b), [D, O] = a(null), k = new Date(T, C, 0).getDate(), A = D ? m(D.year, D.month, D.day) : "", j = (e) => {
		O({
			year: T,
			month: C,
			day: e
		}), s && s({ target: {
			name: c?.name ?? "",
			value: m(T, C, e)
		} });
	}, M = i(null);
	return r(() => {
		if (!h) return;
		let e = (e) => {
			M.current.contains(e.target) || g(!1);
		};
		return document.addEventListener("pointerdown", e), () => document.removeEventListener("pointerdown", e);
	}, [h]), /* @__PURE__ */ n("div", {
		className: "relative d-flex flex-column",
		ref: M,
		children: [
			/* @__PURE__ */ t("label", {
				...e,
				className: `mb-1 ${e?.className}`,
				children: o
			}),
			/* @__PURE__ */ t(u, {
				type: "date",
				value: A,
				onClick: (e) => {
					e.preventDefault(), _(e);
				},
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
					backgroundColor: "var(--light)",
					border: "1px solid var(--border)"
				},
				children: [/* @__PURE__ */ n("div", {
					className: "d-flex justify-space-between p-1",
					children: [/* @__PURE__ */ n("div", {
						className: "d-flex",
						children: [/* @__PURE__ */ t(f, {
							options: x,
							value: C,
							onChange: (e) => w(e),
							style: { minWidth: "122px" }
						}), /* @__PURE__ */ t(f, {
							options: S,
							value: T,
							onChange: (e) => E(e)
						})]
					}), /* @__PURE__ */ n("div", {
						className: "d-flex",
						children: [/* @__PURE__ */ t(l, {
							type: "button",
							onClick: () => {
								let e = C - 1;
								e < 1 ? (w(12), E(T - 1)) : w(e);
							},
							children: /* @__PURE__ */ t(d, { className: "rotate-270" })
						}), /* @__PURE__ */ t(l, {
							type: "button",
							onClick: () => {
								let e = C + 1;
								e > 12 ? (w(1), E(T + 1)) : w(e);
							},
							children: /* @__PURE__ */ t(d, { className: "rotate-90" })
						})]
					})]
				}), /* @__PURE__ */ t("div", {
					className: "p-1",
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(7,1fr)"
					},
					children: Array.from({ length: k }).map((e, n) => /* @__PURE__ */ t(l, {
						variant: D?.year === T && D?.month === C && D?.day === n + 1 ? "contained" : "outlined",
						style: { borderRadius: 0 },
						onClick: () => j(n + 1),
						children: n + 1
					}, n))
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
// src/theme/createTheme.js
var v = (e) => {
	let { palette: t, ...n } = e;
	return {
		palette: {
			...y(M(e.palette.primary), "primary"),
			...y(M(e.palette.grey), "grey"),
			primary: "#5c7d0e",
			dark: "#1d2b3a",
			dark800: "#3b4a5a",
			secondary: "white",
			darkBlue: "#0f1e2e",
			light: "#f6f8f3",
			grey: "5a6b7b",
			backdrop: "rgba(0, 0, 0, 0.5)",
			borderLight: "#dde3e9",
			border: "#7d8b99",
			borderFocus: "#5c7d0e",
			...t
		},
		radius: "8px",
		...n
	};
}, y = (e, t) => {
	let n = {};
	return Object.entries(e).map(([e, r]) => {
		n[`${t}${e}`] = r;
	}), n;
}, b = {
	100: 3 ** (1 / 5),
	200: 3 ** (2 / 5),
	300: 3 ** (3 / 5),
	400: 3 ** (4 / 5),
	500: 3,
	600: 4.5,
	700: 7,
	800: 7 / 4.5 * 7,
	900: 7 * (7 / 4.5) ** 2
}, x = (e) => e <= .04045 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4, S = (e) => e <= .0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - .055, C = (e) => {
	let t = e.replace("#", "");
	t.length === 3 && (t = [...t].map((e) => e + e).join(""));
	let [n, r, i] = [
		0,
		2,
		4
	].map((e) => x(parseInt(t.slice(e, e + 2), 16) / 255)), a = Math.cbrt(.4122214708 * n + .5363325363 * r + .0514459929 * i), o = Math.cbrt(.2119034982 * n + .6806995451 * r + .1073969566 * i), s = Math.cbrt(.0883024619 * n + .2817188376 * r + .6299787005 * i), c = .2104542553 * a + .793617785 * o - .0040720468 * s, l = 1.9779984951 * a - 2.428592205 * o + .4505937099 * s, u = .0259040371 * a + .7827717662 * o - .808675766 * s;
	return [
		c,
		Math.hypot(l, u),
		Math.atan2(u, l) * 180 / Math.PI
	];
}, w = (e, t, n) => {
	let r = t * Math.cos(n * Math.PI / 180), i = t * Math.sin(n * Math.PI / 180), a = (e + .3963377774 * r + .2158037573 * i) ** 3, o = (e - .1055613458 * r - .0638541728 * i) ** 3, s = (e - .0894841775 * r - 1.291485548 * i) ** 3;
	return [
		4.0767416621 * a - 3.3077115913 * o + .2309699292 * s,
		-1.2684380046 * a + 2.6097574011 * o - .3413193965 * s,
		-.0041960863 * a - .7034186147 * o + 1.707614701 * s
	];
}, T = (e) => e.every((e) => e >= -1e-4 && e <= 1.0001), E = (e, t, n) => {
	if (T(w(e, t, n))) return w(e, t, n);
	let r = 0, i = t;
	for (let t = 0; t < 20; t++) {
		let t = (r + i) / 2;
		T(w(e, t, n)) ? r = t : i = t;
	}
	return w(e, r, n);
}, D = ([e, t, n]) => .2126 * e + .7152 * t + .0722 * n, O = (e) => 1.05 / (D(e) + .05), k = (e) => e.map((e) => x(Math.round(Math.min(1, Math.max(0, S(e))) * 255) / 255)), A = (e) => "#" + e.map((e) => Math.round(Math.min(1, Math.max(0, S(e))) * 255).toString(16).padStart(2, "0")).join(""), j = (e, t, n) => {
	let r = 0, i = 1;
	for (let a = 0; a < 30; a++) {
		let a = (r + i) / 2;
		O(k(E(a, n(a), t))) > e ? r = a : i = a;
	}
	return {
		L: r,
		hex: A(E(r, n(r), t))
	};
}, M = (e) => {
	let [, t, n] = C(e), r = j(b[500], n, () => t).L, i = j(b[700], n, () => t).L, a = (e) => e > r ? t * (1 - e) / (1 - r) : e < i ? t * e / i : t;
	return Object.fromEntries(Object.entries(b).map(([e, t]) => [e, j(t, n, a).hex]));
};
// src/theme/ThemeProvider.jsx
function N({ theme: e, children: n }) {
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
export { s as Button, h as DatePicker, l as IconButton, u as Input, _ as Modal, f as Select, N as ThemeProvider, v as createTheme };
