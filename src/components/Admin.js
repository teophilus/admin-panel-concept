import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';

class Label extends Component {

  render() {
    return (<label className={this.props.setting.required ? 'required' : null}>{ this.props.setting.label }</label>)
  }
}

class Input extends Component {

  render() {
    return (
      <div className="input-wrapper">
        <Label setting={this.props.setting} />
        <input type="text" placeholder={ this.props.setting.placeholder } />
      </div>
    )
  }
}

class Textarea extends Component {

  render() {
    return (
      <div className="input-wrapper">
        <Label setting={this.props.setting} />
        <textarea type="text" placeholder={ this.props.setting.placeholder } />
      </div>
    )
  }
}

class Dropdown extends Component {

  render() {
    const options = this.props.setting.options.map((option) => {
      return <option key={option.value} value={option.value}>{option.label}</option>
    });

    return (
      <div className="input-wrapper">
        <Label setting={this.props.setting} />
        <select>
          {options}
        </select>
      </div>
    );
  }
}

class Number extends Component {

  render() {
    return (
      <div className="input-wrapper">
        <Label setting={this.props.setting} />
        <input type="number" placeholder={ this.props.setting.placeholder } />
      </div>
    )
  }
}

class Section extends Component {

  constructor() {
    super();
    this.state = {
      settingTypes: {
        'input': Input,
        'number': Number,
        'dropdown': Dropdown,
        'textarea': Textarea
      }
    }
  }

  render() {
    const settings = this.props.section.settings
      .map((setting) => {
        const settingComponent = this.state.settingTypes[setting.type];
        return React.createElement(settingComponent, {
          setting: setting,
          key: Math.random()
        });
      });
    return (
      <section>
        <div className="subsection">
          <h2>{ this.props.section.name }</h2>
          <p>{ this.props.section.description }</p>
        </div>
        <div className="subsection card">
          { settings }
        </div>
      </section>
    )
  }
}

class Admin extends Component {

  constructor() {
    super();
    this.state = {
      config: [{
        name: "Section One",
        description: "Description for section one",
        settings: [{
          type: "input",
          label: "Label One",
          placeholder: "Placeholder"
        }, {
          type: "number",
          label: "Label Two",
          placeholder: "0"
        }]
      }, {
        name: "Section Two",
        description: "description for section two",
        settings: [{
          type: "dropdown",
          label: "Label One",
          placeholder: "Placeholder",
          "options": [{
            "value": "foo",
            "label": "Foo"
          }, {
            "value": "bar",
            "label": "Bar"
          }]
        },
        {
          type: "textarea",
          label: "Option Two",
          required: true,
        }]
      }]
    };
  }

  render() {
    const config = this.state.config;
    const components = config.map((section) =>
      <Section key={Math.random()} section={section} />
    );

    return (
      <div className="admin-panel">
        <Sidebar />
        <div className="main">
          { components }
        </div>
        <button>Save</button>
      </div>
    )
  }
}

export default Admin;