export interface ServiceLink {
  title: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  items: string[];
}

export interface Client {
  name: string;
  logo?: string;
  industry: string;
}

export interface Partner {
  name: string;
  logo?: string;
  type: string;
}
