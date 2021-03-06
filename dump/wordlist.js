function get_wordlist(){
	var word_list = [
		{'text': 'GitHub', 'weight': '9', 'html': {'title': 'GitHub Profile'}, 'link': {'href': 'https://github.com/triole', 'target': '_blank'}}, 
		{'text': 'Xing', 'weight': '7', 'html': {'title': 'Xing Profile'}, 'link': {'href': 'https://www.xing.com/profile/Olaf_Michaelis4?sc_o=mxb_p"', 'target': '_blank'}}, 
		{'text': 'Kubrick', 'weight': '5', 'html': {'title': 'my thesis'}, 'link': {'href': 'https://publishup.uni-potsdam.de/opus4-ubp/frontdoor/index/index/year/2014/docId/6726', 'target': '_blank'}}, 
		{'text': '033', 'weight': 1}, 
		{'text': 'always', 'weight': 3}, 
		{'text': 'appears', 'weight': 1}, 
		{'text': 'append', 'weight': 2}, 
		{'text': 'args', 'weight': 2}, 
		{'text': 'arr', 'weight': 1}, 
		{'text': 'array', 'weight': 2}, 
		{'text': 'assert', 'weight': 1}, 
		{'text': 'atom', 'weight': 1}, 
		{'text': 'bats', 'weight': 1}, 
		{'text': 'beautified', 'weight': 2}, 
		{'text': 'because', 'weight': 2}, 
		{'text': 'bin', 'weight': 2}, 
		{'text': 'boo', 'weight': 2}, 
		{'text': 'bool', 'weight': 1}, 
		{'text': 'break', 'weight': 2}, 
		{'text': 'bright', 'weight': 2}, 
		{'text': 'buffer', 'weight': 1}, 
		{'text': 'BufRead', 'weight': 1}, 
		{'text': 'BufReader', 'weight': 1}, 
		{'text': 'caps', 'weight': 1}, 
		{'text': 'captures', 'weight': 1}, 
		{'text': 'cargo', 'weight': 2}, 
		{'text': 'change', 'weight': 3}, 
		{'text': 'CheckErr', 'weight': 2}, 
		{'text': 'ClearTerminal', 'weight': 1}, 
		{'text': 'clone', 'weight': 1}, 
		{'text': 'cmd', 'weight': 1}, 
		{'text': 'code', 'weight': 2}, 
		{'text': 'collect', 'weight': 3}, 
		{'text': 'colored', 'weight': 2}, 
		{'text': 'colour', 'weight': 1}, 
		{'text': 'Command', 'weight': 1}, 
		{'text': 'crate', 'weight': 2}, 
		{'text': 'create', 'weight': 3}, 
		{'text': 'crypto', 'weight': 2}, 
		{'text': 'data', 'weight': 1}, 
		{'text': 'Debug', 'weight': 1}, 
		{'text': 'decimals', 'weight': 3}, 
		{'text': 'Default', 'weight': 1}, 
		{'text': 'derive', 'weight': 2}, 
		{'text': 'dump', 'weight': 3}, 
		{'text': 'duplicates', 'weight': 1}, 
		{'text': 'echo', 'weight': 1}, 
		{'text': 'else', 'weight': 1}, 
		{'text': 'encoding', 'weight': 1}, 
		{'text': 'entry', 'weight': 1}, 
		{'text': 'enumerate', 'weight': 1}, 
		{'text': 'err', 'weight': 1}, 
		{'text': 'error', 'weight': 3}, 
		{'text': 'Errorf', 'weight': 1}, 
		{'text': 'errors', 'weight': 1}, 
		{'text': 'exc', 'weight': 1}, 
		{'text': 'execute', 'weight': 1}, 
		{'text': 'exit', 'weight': 2}, 
		{'text': 'exitcode', 'weight': 1}, 
		{'text': 'expand', 'weight': 1}, 
		{'text': 'expect', 'weight': 1}, 
		{'text': 'extension', 'weight': 1}, 
		{'text': 'extern', 'weight': 2}, 
		{'text': 'failed', 'weight': 2}, 
		{'text': 'false', 'weight': 2}, 
		{'text': 'File', 'weight': 1}, 
		{'text': 'filename', 'weight': 1}, 
		{'text': 'find', 'weight': 1}, 
		{'text': 'first', 'weight': 1}, 
		{'text': 'fixed', 'weight': 1}, 
		{'text': 'float64', 'weight': 2}, 
		{'text': 'for', 'weight': 1}, 
		{'text': 'from', 'weight': 1}, 
		{'text': 'Fsplit', 'weight': 1}, 
		{'text': 'func', 'weight': 1}, 
		{'text': 'function', 'weight': 1}, 
		{'text': 'generator', 'weight': 1}, 
		{'text': 'get', 'weight': 3}, 
		{'text': 'git', 'weight': 1}, 
		{'text': 'good', 'weight': 1}, 
		{'text': 'green', 'weight': 1}, 
		{'text': 'having', 'weight': 2}, 
		{'text': 'header', 'weight': 1}, 
		{'text': 'hello', 'weight': 2}, 
		{'text': 'home', 'weight': 1}, 
		{'text': 'hour', 'weight': 2}, 
		{'text': 'i32', 'weight': 1}, 
		{'text': 'idx', 'weight': 1}, 
		{'text': 'ignore', 'weight': 1}, 
		{'text': 'impl', 'weight': 2}, 
		{'text': 'import', 'weight': 2}, 
		{'text': 'input', 'weight': 2}, 
		{'text': 'instring', 'weight': 1}, 
		{'text': 'int', 'weight': 2}, 
		{'text': 'integer', 'weight': 2}, 
		{'text': 'interface', 'weight': 1}, 
		{'text': 'Intn', 'weight': 1}, 
		{'text': 'into', 'weight': 2}, 
		{'text': 'intSlice', 'weight': 1}, 
		{'text': 'iter', 'weight': 2}, 
		{'text': 'Join', 'weight': 1}, 
		{'text': 'json', 'weight': 2}, 
		{'text': 'keys', 'weight': 2}, 
		{'text': 'len', 'weight': 1}, 
		{'text': 'length', 'weight': 1}, 
		{'text': 'let', 'weight': 1}, 
		{'text': 'line', 'weight': 1}, 
		{'text': 'list', 'weight': 1}, 
		{'text': 'lock', 'weight': 1}, 
		{'text': 'lossy', 'weight': 2}, 
		{'text': 'Lpad', 'weight': 3}, 
		{'text': 'make', 'weight': 2}, 
		{'text': 'map', 'weight': 1}, 
		{'text': 'MarshalIndent', 'weight': 2}, 
		{'text': 'match', 'weight': 1}, 
		{'text': 'math', 'weight': 1}, 
		{'text': 'max', 'weight': 1}, 
		{'text': 'min', 'weight': 3}, 
		{'text': 'mut', 'weight': 3}, 
		{'text': 'new', 'weight': 2}, 
		{'text': 'nil', 'weight': 1}, 
		{'text': 'None', 'weight': 1}, 
		{'text': 'not', 'weight': 2}, 
		{'text': 'Now', 'weight': 2}, 
		{'text': 'occured', 'weight': 1}, 
		{'text': 'ole', 'weight': 2}, 
		{'text': 'omic', 'weight': 2}, 
		{'text': 'open', 'weight': 2}, 
		{'text': 'Option', 'weight': 1}, 
		{'text': 'order', 'weight': 1}, 
		{'text': 'output', 'weight': 2}, 
		{'text': 'owned', 'weight': 1}, 
		{'text': 'package', 'weight': 1}, 
		{'text': 'pad', 'weight': 1}, 
		{'text': 'panic', 'weight': 2}, 
		{'text': 'path', 'weight': 1}, 
		{'text': 'popular', 'weight': 1}, 
		{'text': 'pow', 'weight': 2}, 
		{'text': 'PrettyPrint', 'weight': 1}, 
		{'text': 'print', 'weight': 1}, 
		{'text': 'printarr', 'weight': 1}, 
		{'text': 'printexit', 'weight': 1}, 
		{'text': 'println', 'weight': 3}, 
		{'text': 'printout', 'weight': 1}, 
		{'text': 'process', 'weight': 1}, 
		{'text': 'projects', 'weight': 1}, 
		{'text': 'pub', 'weight': 1}, 
		{'text': 'push', 'weight': 2}, 
		{'text': 'pytest', 'weight': 1}, 
		{'text': 'python', 'weight': 3}, 
		{'text': 'python3', 'weight': 1}, 
		{'text': 'rand', 'weight': 1}, 
		{'text': 'random', 'weight': 1}, 
		{'text': 'RandomInteger', 'weight': 1}, 
		{'text': 'range', 'weight': 3}, 
		{'text': 'read', 'weight': 2}, 
		{'text': 'red', 'weight': 1}, 
		{'text': 'regex', 'weight': 1}, 
		{'text': 'release', 'weight': 1}, 
		{'text': 'remove', 'weight': 1}, 
		{'text': 'removes', 'weight': 2}, 
		{'text': 'replace', 'weight': 1}, 
		{'text': 'return', 'weight': 2}, 
		{'text': 'returns', 'weight': 2}, 
		{'text': 'rev', 'weight': 2}, 
		{'text': 'Reverse', 'weight': 1}, 
		{'text': 'reversed', 'weight': 2}, 
		{'text': 'rolling', 'weight': 1}, 
		{'text': 'Round', 'weight': 2}, 
		{'text': 'run', 'weight': 1}, 
		{'text': 'safe', 'weight': 1}, 
		{'text': 'same', 'weight': 1}, 
		{'text': 'searched', 'weight': 2}, 
		{'text': 'sec', 'weight': 1}, 
		{'text': 'Seed', 'weight': 3}, 
		{'text': 'self', 'weight': 3}, 
		{'text': 'serr', 'weight': 2}, 
		{'text': 'shebang', 'weight': 3}, 
		{'text': 'shortestname', 'weight': 2}, 
		{'text': 'shortname', 'weight': 1}, 
		{'text': 'Shuffle', 'weight': 2}, 
		{'text': 'shuffled', 'weight': 3}, 
		{'text': 'shuffles', 'weight': 2}, 
		{'text': 'slice', 'weight': 1}, 
		{'text': 'Some', 'weight': 1}, 
		{'text': 'sout', 'weight': 1}, 
		{'text': 'split', 'weight': 2}, 
		{'text': 'src', 'weight': 2}, 
		{'text': 'status', 'weight': 3}, 
		{'text': 'std', 'weight': 1}, 
		{'text': 'Stderr', 'weight': 2}, 
		{'text': 'Stdout', 'weight': 1}, 
		{'text': 'str', 'weight': 1}, 
		{'text': 'string', 'weight': 1}, 
		{'text': 'strings', 'weight': 1}, 
		{'text': 'struct', 'weight': 1}, 
		{'text': 'target', 'weight': 1}, 
		{'text': 'test', 'weight': 1}, 
		{'text': 'testcmd', 'weight': 2}, 
		{'text': 'testdata', 'weight': 1}, 
		{'text': 'testfiles', 'weight': 1}, 
		{'text': 'testing', 'weight': 1}, 
		{'text': 'TestReverse', 'weight': 2}, 
		{'text': 'TestUnique', 'weight': 1}, 
		{'text': 'the', 'weight': 3}, 
		{'text': 'time', 'weight': 3}, 
		{'text': 'timestamp', 'weight': 1}, 
		{'text': 'tmp', 'weight': 2}, 
		{'text': 'trim', 'weight': 2}, 
		{'text': 'true', 'weight': 2}, 
		{'text': 'try', 'weight': 1}, 
		{'text': 'twice', 'weight': 1}, 
		{'text': 'uniq', 'weight': 1}, 
		{'text': 'Unique', 'weight': 3}, 
		{'text': 'UnixNano', 'weight': 2}, 
		{'text': 'unshuffled', 'weight': 1}, 
		{'text': 'unwrap', 'weight': 1}, 
		{'text': 'use', 'weight': 1}, 
		{'text': 'uses', 'weight': 1}, 
		{'text': 'usize', 'weight': 2}, 
		{'text': 'usr', 'weight': 2}, 
		{'text': 'utf8', 'weight': 1}, 
		{'text': 'util', 'weight': 1}, 
		{'text': 'utils', 'weight': 2}, 
		{'text': 'value', 'weight': 1}, 
		{'text': 'var', 'weight': 1}, 
		{'text': 'variables', 'weight': 3}, 
		{'text': 'Vec', 'weight': 1}, 
		{'text': 'was', 'weight': 3}, 
		{'text': 'web', 'weight': 2}, 
		{'text': 'website', 'weight': 2}, 
		{'text': 'while', 'weight': 1}, 
		{'text': 'without', 'weight': 1}, 
		{'text': 'wordlist', 'weight': 2}, 
		{'text': 'world', 'weight': 2}
	];
	return word_list;
}
