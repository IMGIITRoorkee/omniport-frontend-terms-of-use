import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { AppHeader, AppFooter, AppMain } from 'formula_one'

import Developer from './developer'

import main from 'formula_one/src/css/app.css'

export default class App extends Component {
  render () {
    const creators = [
      {
        name: 'Dhruv Bhanushali',
        role: 'Frontend Developer',
        link: 'https://dhruvkb.github.io/'
      },
      {
        name: 'Praduman Goyal',
        role: 'Mentor',
        link: 'https://pradumangoyal.github.io'
      }
    ]

    const { match } = this.props

    return (
      <div styleName='main.app'>
        <AppHeader appName='terms_and_conditions' mode='site' />
        <AppMain>
          <div styleName='main.app-main'>
            <Switch>
              <Route path={`${match.path}developer/`} component={Developer} />
            </Switch>
          </div>
        </AppMain>
        <AppFooter creators={creators} />
      </div>
    )
  }
}
