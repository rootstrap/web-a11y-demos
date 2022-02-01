const routes = {
  home: "/",
  badSemanticsPlaylist: (slug = ":slug") => `/bad-semantics/playlist/${slug}`,
  goodSemanticsPlaylist: (slug = ":slug") => `/good-semantics/playlist/${slug}`,
  reallyAccessiblePlaylist: (slug = ":slug") =>
    `/really-accessible/playlist/${slug}`,
};

export default routes;
