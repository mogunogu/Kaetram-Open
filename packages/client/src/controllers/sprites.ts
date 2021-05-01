import _ from 'lodash';

import spriteData from '../../data/sprites.json';
import Animation from '../entity/animation';
import Sprite from '../entity/sprite';
import type Game from '../game';
import log from '../lib/log';

import type { SpriteData } from '../entity/sprite';

export default class SpritesController {
    public sprites: { [id: string]: Sprite } = {};
    public sparksAnimation!: Animation;

    public constructor(private game: Game) {
        this.loadAnimations();
    }

    public async load(): Promise<void> {
        const allCount = spriteData.length
        let count = 0;
        await Promise.all(
            spriteData.map(async (data: SpriteData) => {
                const sprite = new Sprite(data);

                await sprite.loadSprite();

                this.sprites[data.id] = sprite;
                count ++
                this.game.app.sendStatus(`스프라이트 로딩 ${count} / ${allCount}`);
            })
        );

        log.debug('Finished loading sprite data...');
    }

    private loadAnimations(): void {
        this.sparksAnimation = new Animation('idle_down', 6, 0, 16, 16);
        this.sparksAnimation.setSpeed(120);
    }

    public updateSprites(): void {
        _.each(this.sprites, (sprite) => sprite.update());

        log.debug('Sprites updated upon scaling.');
    }
}
