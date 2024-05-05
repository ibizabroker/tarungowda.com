'use client';

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export default function GiscusComments() {
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme === 'light' ? 'noborder_light' : 'noborder_dark';

  return (
    <Giscus
      repo="ibizabroker/tarungowda.com"
      repoId="R_kgDOK6tSrQ"
      category="Announcements"
      categoryId="DIC_kwDOK6tSrc4CfJk9"
      mapping="pathname"
      strict="1"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme}
      lang="en"
      loading="lazy"
    />
  );
}