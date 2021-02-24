// ==UserScript==
// @name         go-github1s
// @version      0.2
// @updateURL    https://cdn.jsdelivr.net/gh/yooourt/tm-scripts/go-github1s/main.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/yooourt/tm-scripts/go-github1s/main.user.js
// @author       yooourt
// @match        https://github.com/*
// ==/UserScript==

const e = document.querySelector.bind(document)

const appendHtml = (element, html) => {
    element.insertAdjacentHTML('beforeend', html)
}

const goGithub1s = () => {
    let url = location.href.replace('github', 'github1s')
    window.open(url, '_blank')
}

const insertStyle = () => {
    let container = e('head')
    let html = `
        <style>
            .yooourt-go-github1s {
                color: red;
                font-size: 14px;
                font-family: monospace;
                border: 1px solid darkgreen;
                border-radius: 4px;
                padding: 0 6px;
                cursor: pointer;
            }
        </style>
    `
    appendHtml(container, html)

}

const insertButton = () => {
    let container = e('#js-repo-pjax-container > div > div > div > h1')
    let html = `
        <div class="yooourt-go-github1s">
            go_github1s
        </div>
    `
    appendHtml(container, html)
}

const bindEvent = () => {
    let button = e('.yooourt-go-github1s')
    button.addEventListener('click', () => {
        goGithub1s()
    })
}

const __main = () => {
    insertStyle()
    insertButton()
    bindEvent()
}

__main()
