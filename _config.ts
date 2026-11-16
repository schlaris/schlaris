import lume from "@lumeland/lume";
import lumeCms from "@lumeland/plugin-cms";
import basePath from "@lumeland/plugin-base-path";
import cms from "./_cms.ts";

const site = lume({
  location: new URL("https://schlaris.github.io/schlaris/"),
});
site.use(lumeCms({ cms }));
site.use(basePath());

site.add("styles.css");

export default site;
