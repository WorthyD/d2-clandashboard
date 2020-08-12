import { TestBed } from '@angular/core/testing';
import { AppIndexedDb, STORE_IDS, StoreId } from './app-indexed-db';
import { take } from 'rxjs/operators';
import { deleteDB } from 'idb';

describe('App Indexed DB', () => {
  let database: AppIndexedDb;
  const databaseName = 'UnitTestDB';
  const storeId = StoreId.CacheDetails;

  const testData = [
    { id: '1', data: { name: 'testing 1' }, createDate: new Date() },
    { id: '2', data: { name: 'testing 2' }, createDate: new Date() },
    { id: '3', data: { name: 'testing 3' }, createDate: new Date() },
    { id: '4', data: { name: 'testing 4' }, createDate: new Date() }
  ];

  beforeEach(async () => TestBed.configureTestingModule({}));
  beforeEach(async () => {
    database = new AppIndexedDb(databaseName);
  });

  afterEach(async (done) => {
    await database.close();
    await deleteDB(databaseName);
    done();
  });

  it('should be created with no data', () => {
    database.getAllData(storeId).then((x) => {
      expect(x.length).toEqual(0);
    });
  });

  it('should add values and not error', async (done) => {
    let caughtError;
    try {
      await database.updateValues(testData, storeId);
    } catch (err) {
      caughtError = err;
    }
    expect(caughtError).toBeUndefined();
    done();
  });

  describe('perform operations with data', async () => {
    beforeEach(async () => {
      // Populate database with values
      await database.updateValues(testData, storeId);
    });

    it('should be able to retrieve data', async (done) => {
      database.getAllData(storeId).then((x) => {
        expect(x).toEqual(testData);
        done();
      });
    });
    it('should be able to retrieve data', async (done) => {
      database.getById(storeId, '1').then((x) => {
        expect(x).toEqual(testData.find((y) => y.id === '1'));
        done();
      });
    });

    it('should remove values passed in', async (done) => {
      const takeCount = 2;

      const originalData = await database.getAllData(storeId);

      const initialLength = originalData.length;

      const objectsToRemove = originalData.slice(0, takeCount);

      const idsToRemove = objectsToRemove.map((x) => x.id);

      await database.removeValues(idsToRemove, storeId);

      const refreshedData = await database.getAllData(storeId);
      expect(refreshedData.length).toEqual(initialLength - takeCount);

      refreshedData.forEach((x) => {
        const found = originalData.find((f) => f.id === x.id);
        expect(found).toBeTruthy();
      });

      done();
    });

    it('should remove all values', async (done) => {
      const originalData = await database.getAllData(storeId);
      // Verify we have data
      expect(originalData.length).toBeGreaterThan(0);

      await database.removeAllValues(storeId);

      const refreshedData = await database.getAllData(storeId);
      expect(refreshedData.length).toEqual(0);
      done();
    });
  });
});
