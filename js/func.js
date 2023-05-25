function init() {
  var url = 'https://api.github.com/users/triole/repos?page=1&per_page=1000'
  if (window.location.host.includes('localhost')) {
    url = '/tmp/repos.json'
  }
  fetch_json(url)
    .then(res => {
      append_repos(res)
      return res
    })
    .then(res => {
      $('#grid').isotope({
        itemSelector: '.grid-item',
        masonry: {
          columnWidth: 8,
          horizontalOrder: true,
        },
      })
    })
}

function append_repos(arr) {
  arr.sort(function (a, b) {
    return ('' + a.updated_at).localeCompare(b.updated_at)
  })
  var rev = arr.reverse()
  rev.forEach(function (repo) {
    $('#grid').append(
      make_entry(repo),
    )
  })
}

function after_last_slash(s) {
  return s.match(/\/([^\/]+)\/?$/)[1]
}

function clean(s) {
  if (s === undefined || s === null) {
    s = ''
  }
  if (s == 0) {
    s = ''
  }
  return s
}

function render_topics(topics) {
  html = ''
  topics.forEach(function (top) {
    html += '<span class="topicspan">'
    html += '<a href="https://github.com/topics/' + top + '">'
    html += top + '</a></span>'
  })
  return html
}

function map_lang(lang) {
  r = ''
  if (typeof lang === 'string' || lang instanceof String) {
    var m = {}
    m.css = '/gfx/css.svg'
    m.go = '/gfx/golang.svg'
    m.html = '/gfx/html.svg'
    m.javascript = '/gfx/javascript.svg'
    m.lua = '/gfx/lua.svg'
    m.python = '/gfx/python.svg'
    m.shell = '/gfx/shell.svg'
    m.rust = '/gfx/rust.svg'
    r = m[lang.toLowerCase()]
  }
  if (r === undefined || r === null || r === '') {
    r = ''
  } else {
    r = '<img src="' + r + '" alt="' + lang + '">'
  }
  return r
}

function make_entry(repo) {
  html = '<div class="grid-item">'
  html += '<div class="header">'
  html += '<div class="title"><a href="' + repo.html_url + '">' + repo.name + '</a></div>'
  html += '<div class="badges"></div>'
  html += '<div class="watchers">' + clean(repo.watchers_count) + '</div>'
  html += '</div>'
  html += '<div class="description">' + clean(repo.description)
  html += '<div class="topics">' + render_topics(repo.topics) + '</div>'
  html += '</div>'
  html += '<div class="lang">' + map_lang(repo.language) + '</div>'
  html += '</div>'
  return html
}

String.prototype.toTitleCase = function () {
  return this.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

async function fetch_json(url) {
  let response = await fetch(url)
  let data = await response.json()
  return data
}
