import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'url';
import {test, expect, describe} from '@jest/globals';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

describe('Runtime environment', () => {
  test('__dirname is correct', () => {
    expect(__dirname).toContain('src');
  });

  test('config.json exists', () => {
    expect(fs.existsSync(path.join(__dirname, '../../', 'data', 'config.json'))).toBe(true);
  });

  test('config.json is valid JSON', () => {
    expect(() => {
      import('../../data/config.json', {
          assert: {
          type: 'json',
          },
          });
    }).not.toThrow();
  });

  test('questions.json exists', () => {
    expect(fs.existsSync(path.join(__dirname, '../../', 'data', 'questions.json'))).toBe(true);
  });

  test('questions.json is valid JSON', () => {
    expect(() => {
      import('../../data/questions.json', {
          assert: {
          type: 'json',
          },
          });
    }).not.toThrow();
  });
});