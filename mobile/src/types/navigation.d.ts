export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SignIn,
      feed,
      terms,
      details: {
        title: string;
        url: string;
        urlToImage: string;
        publishedAt: string;
        content: string;
      }
    }
  }
}
