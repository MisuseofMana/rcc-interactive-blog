import {Howl, Howler} from 'howler';

const theme = new Howl({
    src: ['/audio/theme.mp3'],
    loop: true,
    volume: .5,
});

const aboutTheme = new Howl({
    src: ['/audio/aboutTheme.mp3'],
    loop: true,
    volume: .1,
});

const realmsTheme = new Howl({
    src: ['/audio/realms.mp3'],
    loop: true,
    volume: .05,
});

const lierd = new Howl({
    src: ['/audio/lierd.mp3'],
    loop: true,
    volume: 1,
});

const fencedcity = new Howl({
    src: ['/audio/fencedcity.mp3'],
    loop: true,
    volume: .3,
});

const shakencolony = new Howl({
    src: ['/audio/shakencolony.mp3'],
    loop: true,
    volume: .2,
});

const willowwoods = new Howl({
    src: ['/audio/willowwoods.mp3'],
    loop: true,
    volume: .05,
});

const relicgarden = new Howl({
    src: ['/audio/relicgarden.mp3'],
    loop: true,
    volume: .1,
});

const councillors = new Howl({
    src: ['/audio/councillors.mp3'],
    loop: true,
    volume: .1,
});

const replacements = new Howl({
    src: ['/audio/replacements.mp3'],
    loop: true,
    volume: .05,
});

const inhabitedrealm = new Howl({
    src: ['/audio/inhabitedrealm.mp3'],
    loop: true,
    volume: .2,
});

const artifacts = new Howl({
    src: ['/audio/artifacts.mp3'],
    loop: true,
    volume: .2,
});

const agregatelagoon = new Howl({
    src: ['/audio/agregatelagoon.mp3'],
    loop: true,
    volume: .4,
});

export default {
    theme,
    aboutTheme,
    realmsTheme,
    lierd,
    fencedcity,
    shakencolony,
    willowwoods,
    relicgarden,
    councillors,
    replacements,
    inhabitedrealm,
    artifacts,
    agregatelagoon
}
