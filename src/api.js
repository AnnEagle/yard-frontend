// @flow

const apiUrl = 'https://api.jqestate.ru/v1';
const imagesUrl = 'https://images.jqestate.ru';

export function get(resource: string): Promise<*> {
  return fetch(`${apiUrl}${resource}`).then(res => res.json());
}

export function getImage(id: string, size: number): string {
  return `${imagesUrl}/${id}-jqestate-${size}`;
}
