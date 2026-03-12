import PocketBase from 'pocketbase';
const pb = new PocketBase('http://185.157.244.202:8090'); 


export async function getArtists() {
  try {
    const data = await pb.collection('artists').getFullList({ sort: 'name' });
    return data.map(artist => ({
      id: artist.id,
      name: artist.name,
      date: artist.date || null,
      image: artist.image ? pb.files.getURL(artist, artist.image) : null,
      legend: artist.legend || null,
      summary: artist.summary || null
    }));
  } catch (err) {
    console.log('Erreur getArtists:', err);
    return [];
  }
}


export async function getArtistById(id) {
  try {
    const artist = await pb.collection('artists').getOne(id);
    return {
      id: artist.id,
      name: artist.name,
      date: artist.date || null,
      image: artist.image ? pb.files.getURL(artist, artist.image) : null,
      legend: artist.legend || null,
      summary: artist.summary || null
    };
  } catch (err) {
    console.log('Erreur getArtistById:', err);
    return null;
  }
}