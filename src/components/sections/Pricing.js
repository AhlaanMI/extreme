import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { BOOKING_PACKAGES, CONTACT } from "../../utils/constants";
export const Pricing = () => {
  const packages = BOOKING_PACKAGES;
  return _jsx("section", {
    id: "pricing",
    className: "section",
    children: _jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [
        _jsxs(motion.div, {
          className: "text-center mb-16",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          children: [
            _jsx("div", {
              className: "badge-accent mb-4 inline-block",
              children: "Training Options",
            }),
            _jsxs("h2", {
              className: "section-title",
              children: [
                "Membership ",
                _jsx("span", {
                  className: "gradient-text",
                  children: "Packages",
                }),
              ],
            }),
            _jsx("p", {
              className: "section-subtitle mx-auto text-center",
              children: "Organized fee structure for all membership options.",
            }),
          ],
        }),
        _jsx(motion.div, {
          className: "hidden md:block max-w-5xl mx-auto",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          children: _jsx("div", {
            className:
              "glass rounded-2xl overflow-hidden border border-white border-opacity-20",
            children: _jsxs("table", {
              className: "w-full text-left",
              children: [
                _jsx("thead", {
                  className: "bg-white bg-opacity-5",
                  children: _jsxs("tr", {
                    children: [
                      _jsx("th", {
                        className:
                          "px-6 py-4 text-sm uppercase tracking-wider text-gray-300",
                        children: "Package",
                      }),
                      _jsx("th", {
                        className:
                          "px-6 py-4 text-sm uppercase tracking-wider text-gray-300",
                        children: "Registration fee",
                      }),
                      _jsx("th", {
                        className:
                          "px-6 py-4 text-sm uppercase tracking-wider text-gray-300",
                        children: "Amount",
                      }),
                    ],
                  }),
                }),
                _jsx("tbody", {
                  children: packages.map((pkg) =>
                    _jsxs(
                      "tr",
                      {
                        className: "border-t border-white border-opacity-10",
                        children: [
                          _jsx("td", {
                            className: "px-6 py-4 text-white font-semibold",
                            children: pkg.name,
                          }),
                          _jsx("td", {
                            className: "px-6 py-4 text-gray-300",
                            children: pkg.registrationFee,
                          }),
                          _jsx("td", {
                            className: "px-6 py-4 text-primary font-semibold",
                            children: pkg.amount,
                          }),
                        ],
                      },
                      pkg.name,
                    ),
                  ),
                }),
              ],
            }),
          }),
        }),
        _jsx(motion.div, {
          className: "grid grid-cols-1 gap-4 md:hidden max-w-md mx-auto",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          children: packages.map((pkg) =>
            _jsxs(
              "div",
              {
                className:
                  "glass rounded-xl p-4 border border-white border-opacity-15",
                children: [
                  _jsx("p", {
                    className: "text-white font-semibold mb-2",
                    children: pkg.name,
                  }),
                  _jsxs("p", {
                    className: "text-sm text-gray-300",
                    children: ["Registration fee: ", pkg.registrationFee],
                  }),
                  _jsxs("p", {
                    className: "text-sm text-primary font-semibold mt-1",
                    children: ["Amount: ", pkg.amount],
                  }),
                ],
              },
              pkg.name,
            ),
          ),
        }),
        _jsx(motion.div, {
          className: "mt-16 text-center",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: 0.3 },
          children: _jsxs("p", {
            className: "text-gray-400 text-lg",
            children: [
              "\uD83D\uDCDE Call ",
              CONTACT.phone,
              " for pricing details and availability.",
            ],
          }),
        }),
      ],
    }),
  });
};
