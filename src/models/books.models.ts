type AccessInfo = {
  accessViewStatus: string;
  country: string;
  embedable: boolean;
  epub: Record<string, any>;
  pdf: Record<string, any>;
  publicDomain: boolean;
};

type SaleInfo = {
  listPrice: { amount: number; curencyCode: string };
};

type SearchInfo = {
  textSnippet: string;
};

type VolumeInfo = {
  authors: Array<string>;
  categories: Array<string>;
  description: string;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
  previewLink: string;
  title: string;
  infoLink: string;
};

type Items = {
  accessInfo: AccessInfo;
  etag: string;
  id: string;
  kind: string;
  saleInfo: SaleInfo;
  searchInfo: SearchInfo;
  selfLink: string;
  volumeInfo: VolumeInfo;
};

type BooksResponse = {
  items: Array<Items>;
  kind: string;
  totalItems: number;
};
