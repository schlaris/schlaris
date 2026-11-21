import lume from "@lumeland/lume";
import lumeCms from "@lumeland/plugin-cms";
import basePath from "@lumeland/plugin-base-path";
import cms from "./_cms.ts";
import extractDate from "@lumeland/plugin-extract-date";
import lume from "lume/mod.ts";

const site = lume({
  location: new URL("https://schlaris.github.io/schlaris/"),
});
site.use(lumeCms({ cms }));
site.use(basePath());
site.use(extractDate());
site.add("styles.css");
site.copy("fonts");
site.copy([".png"]);
export default site;
