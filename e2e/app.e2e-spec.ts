import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('my-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

  // ... https://angular.io/guide/component-interaction
  const _heroNames = ['Mr. IQ', 'Magneta', 'Bombasto'];
  const _masterName = 'Master';

  it('should pass properties to children properly', function() {
    const parent = element.all(by.tagName('app-hero-parent')).get(0);
    const heroes = parent.all(by.tagName('app-hero-child'));

    for (let i = 0; i < _heroNames.length; i++) {
      const childTitle = heroes
        .get(i)
        .element(by.tagName('h3'))
        .getText();
      const childDetail = heroes
        .get(i)
        .element(by.tagName('p'))
        .getText();
      expect(childTitle).toEqual(_heroNames[i] + ' says:');
      expect(childDetail).toContain(_masterName);
    }
  });

  // ...
  it('should display trimmed, non-empty names', function() {
    const _nonEmptyNameIndex = 0;
    const _nonEmptyName = '"Mr. IQ"';
    const parent = element.all(by.tagName('app-name-parent')).get(0);
    const hero = parent
      .all(by.tagName('app-name-child'))
      .get(_nonEmptyNameIndex);

    const displayName = hero.element(by.tagName('h3')).getText();
    expect(displayName).toEqual(_nonEmptyName);
  });

  it('should replace empty name with default name', function() {
    const _emptyNameIndex = 1;
    const _defaultName = '"<no name set>"';
    const parent = element.all(by.tagName('app-name-parent')).get(0);
    const hero = parent.all(by.tagName('app-name-child')).get(_emptyNameIndex);

    const displayName = hero.element(by.tagName('h3')).getText();
    expect(displayName).toEqual(_defaultName);
  });

  // ...
  // Test must all execute in this exact order
  it('should set expected initial values', function() {
    const actual = getActual();

    const initialLabel = 'Version 1.23';
    const initialLog =
      'Initial value of major set to 1, Initial value of minor set to 23';

    expect(actual.label).toBe(initialLabel);
    expect(actual.count).toBe(1);
    expect(actual.logs.get(0).getText()).toBe(initialLog);
  });

  it('should set expected values after clicking \'Minor\' twice', function() {
    const repoTag = element(by.tagName('app-version-parent'));
    const newMinorButton = repoTag.all(by.tagName('button')).get(0);

    newMinorButton.click().then(function() {
      newMinorButton.click().then(function() {
        const actual = getActual();

        const labelAfter2Minor = 'Version 1.25';
        const logAfter2Minor = 'minor changed from 24 to 25';

        expect(actual.label).toBe(labelAfter2Minor);
        expect(actual.count).toBe(3);
        expect(actual.logs.get(2).getText()).toBe(logAfter2Minor);
      });
    });
  });

  it('should set expected values after clicking \'Major\' once', function() {
    const repoTag = element(by.tagName('app-version-parent'));
    const newMajorButton = repoTag.all(by.tagName('button')).get(1);

    newMajorButton.click().then(function() {
      const actual = getActual();

      const labelAfterMajor = 'Version 2.0';
      const logAfterMajor =
        'major changed from 1 to 2, minor changed from 25 to 0';

      expect(actual.label).toBe(labelAfterMajor);
      expect(actual.count).toBe(4);
      expect(actual.logs.get(3).getText()).toBe(logAfterMajor);
    });
  });

  function getActual() {
    const versionTag = element(by.tagName('app-version-child'));
    const label = versionTag.element(by.tagName('h3')).getText();
    const ul = versionTag.element(by.tagName('ul'));
    const logs = ul.all(by.tagName('li'));

    return {
      label: label,
      logs: logs,
      count: logs.count()
    };
  }

  // ...
  it('should not emit the event initially', function() {
    const voteLabel = element(by.tagName('app-vote-taker'))
      .element(by.tagName('h3'))
      .getText();
    expect(voteLabel).toBe('Agree: 0, Disagree: 0');
  });

  it('should process Agree vote', function() {
    const agreeButton1 = element
      .all(by.tagName('app-voter'))
      .get(0)
      .all(by.tagName('button'))
      .get(0);
    agreeButton1.click().then(function() {
      const voteLabel = element(by.tagName('app-vote-taker'))
        .element(by.tagName('h3'))
        .getText();
      expect(voteLabel).toBe('Agree: 1, Disagree: 0');
    });
  });

  it('should process Disagree vote', function() {
    const agreeButton1 = element
      .all(by.tagName('app-voter'))
      .get(1)
      .all(by.tagName('button'))
      .get(1);
    agreeButton1.click().then(function() {
      const voteLabel = element(by.tagName('app-vote-taker'))
        .element(by.tagName('h3'))
        .getText();
      expect(voteLabel).toBe('Agree: 1, Disagree: 1');
    });
  });
  // ...
});
