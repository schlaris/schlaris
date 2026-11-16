import lume from "@lumeland/lume";
import lumeCms from "@lumeland/plugin-cms";
import cms from "./_cms.ts";

const site = lume();
site.use(lumeCms({ cms }));

site.add("styles.css");

export default site;
