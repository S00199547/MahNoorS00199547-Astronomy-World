export interface Event {
    id: string;
    title: string;
    geometry: Geometry[];
    // Other properties you need
  }
  
  export interface Geometry {
    coordinates: [number, number];
  }
  