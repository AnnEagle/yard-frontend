const apiUrl = 'https://api.jqestate.ru/v1';
const imagesUrl = 'https://images.jqestate.ru';

export function get(params) {
  return fetch(`${apiUrl}${params}`).then(res => res.json());
}

export function getImage(id, size) {
  return `${imagesUrl}/${id}-jqestate-${size}`;
}
