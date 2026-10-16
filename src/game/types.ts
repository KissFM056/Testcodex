export type Style = 'romantic' | 'classic' | 'bold';
export type Avatar = { id: string; name: string; skin: string; description: string };
export type Item = { id: string; name: string; color: string; style: Style };
export type Challenge = { id: string; name: string; description: string; style: Style; advice: string };
export type Score = { total: number; theme: number; harmony: number };
