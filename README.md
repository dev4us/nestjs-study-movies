<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description
### Contollers
- url을 받아 특정 함수를 실행시키는 역할 (기존 express의 라우터와 같은)
- 데코레이터를 통해 주소를 매칭되는 url에 상응하는 기능을 제공(데코레이터를 통해 method를 설정 가능)
  ```js
    @Get() // '/'
    functionName(): string {
      return whatever;
    }

    @Get('/profile') // '/profile'
    functionName2(): string{
      return whatever2;
    }
  ```
- Nest.js는 컨트롤러를 비지니스 로직과 분리하는 것을 선호함
- controller.ts 내 @Controller('movies')의 'movies'는 최우선적인 entry 라우팅 역할을 수행한다.
  - /index => nope
  - /movies/index => yes : )

- 아래와 같은 방식으로 컨트롤러를 작성해주면 id를 파라미터로 수신한다.

  ```js
  @Get("/:id")
  getOne(@Param('id') movieID: string){
    return `This will return one Movie with the id: ${movieID}`;
  }
  ```

- 쿼리 스트링을 사용하려면 아래와 같이 작성하면 된다.
  ```js
  @Get("search")
  search(@Query("year") searchingYear: string ){
    return `We are searching for a movie made after: ${searchingYear}`;
  }
  ```

- Body 데이터를 활용하려면 아래와 같이 작성하면 된다.
  ```js
  @Post()
  create(@Body() movieData){
    console.log(movieData);
    return movieData;
  }
  ```