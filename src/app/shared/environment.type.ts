export type PortalUrls = {
  tams: string;
  driver: string;
  serviceProvider: string;
  customer: string;
  casing: string;
};

export type Environment = {
  production: boolean;
  api: string;
  portalUrls: PortalUrls;
  systemName?: string;
};
