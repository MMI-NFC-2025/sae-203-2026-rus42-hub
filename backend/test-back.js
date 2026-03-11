// test-back.js
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
    console.log('Все артисты по дате:');
    console.log(await getArtistsByDate());

    console.log('Все артисты по алфавиту:');
    console.log(await getArtistsAlphabetical());

    console.log('Все сцены:');
    console.log(await getScenes());

    console.log('Артист по id (пример):');
    const sampleArtistId = 'kgq9h32ditpx6xz'; // вставь сюда любой id из твоего списка
    console.log(await getArtistById(sampleArtistId));

    console.log('Сцена по id (пример):');
    // Подставь id сцены, как будет готово
    // const sampleSceneId = 'твоя_сцена_id';
    // console.log(await getSceneById(sampleSceneId));

    console.log('Артисты на сцене по id (пример):');
    // await getArtistsBySceneId(sampleSceneId)

    console.log('Артисты на сцене по имени (пример):');
    // await getArtistsBySceneName("Scène Nyama")
}

test();