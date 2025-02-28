module.exports = {
  params: {
    designator: "BAT",
    side: "F",
    P1: { type: "net", value: "VCC" },
    P2: { type: "net", value: "GND" },
  },
  body: (p) => {
    const fp = [];
    const flip = p.side === "B";
    if (!flip && p.side !== "F") throw new Error("unsupported side: " + p.side);

    fp.push(`(footprint "lipo-reversible"`);
    fp.push(p.at);
    fp.push(`(layer ${(flip ? "B" : "F")}.Cu)`);
    fp.push(`(attr smd)`);

    fp.push(
      `(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${
        p.side === "B" ? " (justify mirror)" : ""
      }))`,
    );

    // Pads
    fp.push(
      `(pad "1" thru_hole roundrect (at ${(flip
        ? 2.54
        : -2.54)} -5.08 ${p.r}) (size 2 1) (drill 0.5) (layers "*.Cu" "*.Paste" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25) (thermal_bridge_angle 45) ${p.P1})`,
    );
    fp.push(
      `(pad "2" thru_hole roundrect (at ${(flip
        ? 2.54
        : -2.54)} -2.54 ${p.r}) (size 2 1) (drill 0.5) (layers "*.Cu" "*.Paste" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25) (thermal_bridge_angle 45) ${p.P2})`,
    );

    // B.SilkS
    fp.push(
      `(fp_rect (start ${(flip ? -0 : 0)} -10.16) (end ${(flip
        ? -30
        : 30)} 1.84) (stroke (width 0.1) (type default)) (fill none) (layer ${(flip
          ? "F.SilkS"
          : "B.SilkS")}))`,
    );
    fp.push(
      `(fp_text user "+" (at ${(flip ? 2.54 : -2.54)} -6.35 ${
        p.r + 0
      }) (unlocked yes) (layer ${(flip
        ? "F.SilkS"
        : "B.SilkS")}) (effects (font (size 1 1) (thickness 0.1)) (justify bottom${
        flip ? " mirror" : ""
      })))`,
    );
    fp.push(
      `(fp_text user "-" (at ${(flip ? 2.54 : -2.54)} -1.27 ${
        p.r + 0
      }) (unlocked yes) (layer ${(flip
        ? "F.SilkS"
        : "B.SilkS")}) (effects (font (size 1 1) (thickness 0.1))${
        p.side === "B" ? " (justify mirror)" : ""
      }))`,
    );

    // F.SilkS
    fp.push(
      `(fp_rect (start ${(flip ? -0 : 0)} -10.16) (end ${(flip
        ? -30
        : 30)} 1.84) (stroke (width 0.1) (type default)) (fill none) (layer ${(flip
          ? "B.SilkS"
          : "F.SilkS")}))`,
    );
    fp.push(
      `(fp_text user "+" (at ${(flip ? 2.54 : -2.54)} -6.35 ${
        p.r + 0
      }) (unlocked yes) (layer ${(flip
        ? "B.SilkS"
        : "F.SilkS")}) (effects (font (size 1 1) (thickness 0.1)) (justify bottom${
        flip ? " mirror" : ""
      })))`,
    );
    fp.push(
      `(fp_text user "-" (at ${(flip ? 2.54 : -2.54)} -1.27 ${
        p.r + 0
      }) (unlocked yes) (layer ${(flip
        ? "B.SilkS"
        : "F.SilkS")}) (effects (font (size 1 1) (thickness 0.1))${
        p.side === "B" ? " (justify mirror)" : ""
      }))`,
    );

    // F.Fab
    fp.push(
      `(fp_text user "\${REFERENCE}" (at ${(flip ? -14.732 : 14.732)} -1.524 ${
        p.r + 0
      }) (unlocked yes) (layer ${(flip
        ? "B.Fab"
        : "F.Fab")}) (effects (font (size 1 1) (thickness 0.15))${
        p.side === "B" ? " (justify mirror)" : ""
      }))`,
    );

    fp.push(`(version 20240108)`);
    fp.push(`(generator "pcbnew")`);
    fp.push(`(generator_version "8.0")`);

    fp.push(`)`);

    return fp.join("\n");
  },
};
