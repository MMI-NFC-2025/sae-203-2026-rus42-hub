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
    const artistsByDate = await getArtistsByDate();
    console.log(artistsByDate);

    const artistsAlphabetical = await getArtistsAlphabetical();
    console.log(artistsAlphabetical);

    const scenes = await getScenes();
    console.log(scenes);

    const sampleArtistId = 'kgq9h32ditpx6xz';
    const artistById = await getArtistById(sampleArtistId);
    console.log(artistById);

    const sampleSceneId = 'SCENE_ID_EXEMPLE';
    const sceneById = await getSceneById(sampleSceneId);
    console.log(sceneById);

    const artistsBySceneId = await getArtistsBySceneId(sampleSceneId);
    console.log(artistsBySceneId);

    const sampleSceneName = 'Nom de la scène';
    const artistsBySceneName = await getArtistsBySceneName(sampleSceneName);
    console.log(artistsBySceneName);
}

test();