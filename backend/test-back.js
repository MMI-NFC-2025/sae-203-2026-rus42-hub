import {
    getArtistsByDate,
    getArtistsAlphabetical,
    getScenes,
    getArtistById,
    getSceneById,
    getArtistsBySceneId,
    getArtistsBySceneName,
    saveRecord
} from './backend.mjs';

async function test() {

    console.log('Tous les artistes triés par date :');
    console.log(await getArtistsByDate());

    console.log('Tous les artistes par ordre alphabétique :');
    console.log(await getArtistsAlphabetical());

    console.log('Toutes les scènes :');
    console.log(await getScenes());

    console.log("Artiste par ID (exemple) :");
    const sampleArtistId = 'kgq9h32ditpx6xz';
    console.log(await getArtistById(sampleArtistId));

    console.log("Scène par ID (exemple) :");
    const sampleSceneId = 'SCENE_ID_EXEMPLE';
    console.log(await getSceneById(sampleSceneId));

    console.log("Artistes d'une scène par ID (exemple) :");
    console.log(await getArtistsBySceneId(sampleSceneId));

    console.log("Artistes d'une scène par nom (exemple) :");
    const sampleSceneName = 'Nom de la scène';
    console.log(await getArtistsBySceneName(sampleSceneName));

}

test();