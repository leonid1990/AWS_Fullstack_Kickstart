import { Component } from '@angular/core'
import { Lambda } from '../../services/lambda'

interface IListItem {
    name?: string,
    amount?: number,
    checked?: boolean
}

@Component
    ({
        selector: 'app-root',
        templateUrl: './root.page.html',
        styleUrls: ['./root.page.scss']
    })

export class ApplicationRootPage {
    constructor(private lambda: Lambda) {
        this.dbResults = []

        // define you aws REST api gateway address (after deploying your api)
        this.lambda.url('https://7143jh582a.execute-api.us-east-1.amazonaws.com/test/')

        this.lambda.run('read',
            {
                "table_name": "kirr9hea"
            }
        ).then(list => {
            this.list = list.Items
        })

        /* this.list = [
            { name: 'test item', amount: 10, checked: true },
            { name: 'test item 2', amount: 20 }
        ] */

    }

    public list: Array<IListItem>
    public listItem: IListItem

    public readonly dbResults: Array<any>

    // deploy echo function (code located under `lambda/echo` folder)
    ping() {
        this.lambda.run('ping').then(item => this.dbResults.push(item))
    }

    addNewItem() {
        this.list.push({})
    }
}
