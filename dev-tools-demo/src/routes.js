const routes = {
  home: "/",
  notAccessiblePlaylist: (slug = ":slug") => `/not-accessible/playlist/${slug}`,
  somewhatAccessiblePlaylist: (slug = ":slug") =>
    `/somewhat-accessible/playlist/${slug}`,
  totallyAccessiblePlaylist: (slug = ":slug") =>
    `/totally-accessible/playlist/${slug}`,
};

export default routes;
