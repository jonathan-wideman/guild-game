import { createECS } from 'miniplex-react';

export const ECS = createECS();

// export const playerEntity = ECS.world.createEntity({
//   label: 'player',
//   score: 0,
// });

// export const worldTimeEntity = ECS.world.createEntity({
//   timeScale: 1,
//   delay: 16, // ~60fps
// });

// export const gameStateEntity = ECS.world.createEntity({
//   loop: true,
// });

// export function scheduleTick() {
//   if (gameStateEntity.loop) {
//     setTimeout(tick, worldTimeEntity.delay);
//   }
// }

// export function tick() {
//   // update game state
//   playerScoreIncremetSystem();
//   // schedule another tick
//   scheduleTick();
// }

// console.log(ECS.world);
// const entitiesWithLabelAndScore = ECS.world.with('label', 'score');
// function playerScoreIncremetSystem() {
//   for (const entity of entitiesWithLabelAndScore) {
//     if (entity.label === 'player') {
//       entity.score += 1;
//     }
//   }
// }

// scheduleTick();
