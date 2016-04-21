import {Component, OnInit} from "angular2/core";
import {prettyJson} from "../shared/pipes/prettyJson";


@Component({
	selector: 'query-run',
	templateUrl: './app/run/run.component.html',
	styleUrls: ['./app/run/run.component.css'],
	inputs: ['mapping', 'config', 'responseHookHelp'],
	pipes: [prettyJson]
})

export class RunComponent implements OnInit{
	public mapping;
	public config;
	public responseHookHelp;

	ngOnInit() {
		this.responseHookHelp.applyEditor({readOnly: true});
	}
}