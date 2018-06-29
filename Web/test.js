function Area() 
{
	var F = document.getElementById('Fellips');
	var a = F.a.value / 2;
	var b = F.b.value / 2;
	if (a < 0 || b < 0)
		alert('Error: not correct');
	else
		alert(3.14 * a * b);
}

function Cycle()
{
	var F = document.getElementById('F');
	var x = F.x.value;
	if (Math.abs(x) >= 1) {
		alert('Error: not correct');
		exit;
	}
	var sum = 1, i = 1, p, fact = 1;
	do {
		fact *= i;
		p = Math.pow(x,i) / fact;
		sum += p;
		++i;
	} while (Math.abs(p) >= 0.0003);
	alert(sum);
}

var Matrix = [];

function Arr()
{
	var new_table = document.createElement("table");
	new_table.id = "bestTable";
	for (var i = 0; i < 5; ++i) {
		var row = document.createElement("tr");
		for (var j = 0; j < 7; ++j) {
			var cell = document.createElement("td");
			cell.innerHTML = Matrix[j][i];
			row.appendChild(cell);
		}
		new_table.appendChild(row);
	}
	Form = document.getElementById("Form");
	old_table = document.getElementById("bestTable");

	if (old_table) {
		Form.replaceChild(new_table, old_table)
	} else {
		Form.insertBefore(new_table, document.getElementById("reset"));
	}
}

function cmpNum(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

function Sort()
{
	for (var i = 0; i < 7; ++i) {
		Matrix[i].sort(cmpNum);
	}
	Arr();
}

function CreateM()
{
	for (var i = 0; i < 7; ++i) {
		Matrix[i] = [];
		for (var j = 0; j < 5; ++j) {
			Matrix[i][j] = Math.round(Math.random() * 9);
		}
	}
	Arr();
}

var Tmp = [];

function Array(n)
{
	var new_table = document.createElement("table");
	new_table.id = "bestTable";
	for (var i = 0; i < n; ++i) {
		var row = document.createElement("tr");
		for (var j = 0; j < n; ++j) {
			var cell = document.createElement("td");
			cell.innerHTML = Matrix[i][j];
			row.appendChild(cell);
		}
		new_table.appendChild(row);
	}
	Form = document.getElementById("form");
	old_table = document.getElementById("bestTable");

	if (old_table) {
		Form.replaceChild(new_table, old_table)
	} else {
		Form.insertBefore(new_table, document.getElementById("reset"));
	}
}

function GetRandomInt(min, max)
{
	return Math.round(Math.random() * (max - min - 1) + min);
}

function GetArray()
{
	var F = document.getElementById('form');
	var min = Math.min(F.min.value, F.max.value);
	var max = Math.max(F.min.value, F.max.value);
	var n = F.n.value;
	if (n <= 0) {
		alert('Error: not correct');
		exit;
	}
	var k = 0;
	for (var i = 0; i < n; ++i) {
		Matrix[i] = [];
		for (var j = 0; j < n; ++j) {
			Matrix[i][j] = GetRandomInt(min, max);
			Tmp[k] = Matrix[i][j];
			++k;
		}
	}
	Array(n);
}

function GetResultArray()
{
	var F = document.getElementById('form');
	var n = F.n.value;
	var k = 0;
	Tmp.sort(cmpNum);
	for (var i = n - 1; i >= 0; i--) {
		if ((n - i) % 2 == 0) {
			for (var j = 0; j < n; j++) {
				Matrix[i][j] = Tmp[k];
				++k;
			}
		} else {
			for (var j = n - 1; j >= 0; j--) {
				Matrix[i][j] = Tmp[k];
				++k;
			}
		}
	}
	Array(n);
}