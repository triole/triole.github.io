function init() {
    fetch_json('https://api.github.com/users/triole/repos?page=1&per_page=1000')
        .then(res => {
            append_repos(res);
            return res;
        })
        .then(res => {
            $('#grid').isotope({
                itemSelector: '.grid-item',
                masonry: {
                    columnWidth: 8,
                    horizontalOrder: true,
                }
            });
        })
}

function append_repos(arr) {
    arr.sort(function(a, b) {
        return ('' + a.updated_at).localeCompare(b.updated_at);
    });
    var rev = arr.reverse();
    rev.forEach(function(repo) {
        $('#grid').append(
            make_entry(repo)
        );
    });
}

function after_last_slash(s) {
    return s.match(/\/([^\/]+)\/?$/)[1];
}

function clean(s) {
    if (s === undefined || s === null) {
        s = ""
    }
    if (s == 0) {
        s = ""
    }
    return s
}

function make_entry(repo) {
    html = '<div class="grid-item">';
    html += '<div class="header">'
    html += '<div class="title"><a href="' + repo.html_url + '">' + after_last_slash(repo.full_name) + '</a></div>';
    html += '<div class="badges"></div>';
    html += '<div class="watchers">' + clean(repo.watchers_count) + '</div>';
    html += '</div>'
    html += '<div class="description">' + clean(repo.description) + '</div>';
    html += '</div>';
    return html
}

async function fetch_json(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}
