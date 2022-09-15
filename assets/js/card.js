"use strict"

const herois = [
    'Iron - Wounded, captured and forced to build a weapon by …make the world a safer, better place as Iron Man.',
    'Thanos - The Mad Titan Thanos, a melancholy, brooding indiv…he became more powerful than any of his brethren.',
    'SpiderMan - Peter’s relatively normal life changed abruptly du…it escaped and bit Peter before it was destroyed.',
    'Thor - As the Norse God of thunder and lightning, Thor wi…never, ever stop fighting for a worthwhile cause.',
    'Captain America - Vowing to serve his country any way he could, youn… living, breathing symbol of freedom and liberty.'
]

const createCard = (array) => {
    const container = document.querySelector('.container');
    const div = document.createElement('div');
    const infoArray = array.split(' - ');
    div.classList.add('card');
    div.innerHTML = `
    <span class="cardTitle">${infoArray[0]}</span>
    <span class="cardText">${infoArray[1]}</span>`;
    container.appendChild(div);
}

herois.forEach(createCard)