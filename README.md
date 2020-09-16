# Google Developer Student Club Website

> 🛠 This is a work in progress. The structure may be subject to change.

## Install

```bash
# install the gatbsy CLI
$ npm install -g gatsby-cli

# install dependencies
$ npm install

# Run on localhost:8000 (by default)
$ gatsby develop
```

> Note: this is only required if you want to change the website structure / hardcoded content. It is not necessary if you only want to edit metadata or teams information.

### Social links
The type `Social` in the schemas below is an object of kind `{ socialName: link }`.
The [Fontawesome](https://www.npmjs.com/package/@fortawesome/free-brands-svg-icons) library is used, and the used icons must be explicitly imported within the components.

## Site Metadata

Location: `./gatsby-config`

Schema:
```js
{
	title: string, // Site title
	description: string, // meta description
	university: string, // university name
	lang: string, // meta lang
	register: string, // link to register form
	mail: string,
	social: Social,
}
```

Social icons already imported: twitter, youtube, github


## Teams data

Location: `./teams/teams.yaml`

Schema:
```js
{
	name: string,
	rule: string,
	img: string, // relative to ./teams/
	descs: [string],
	social: Social,
}
```

Social icons already imported: twitter, linkedin, github
