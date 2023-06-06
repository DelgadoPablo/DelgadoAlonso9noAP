const request = require('supertest');
const {app, cita} = require('../controllers/cita');
const server = require('../index');

describe('GET /', () => {
    afterAll((done) => {
        server.close(done);
    });
  
    it('Debe consultar y devolver un array de citas', async () => {
      const response = await request(app).get('/cita');
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
  });


describe('POST /cita', () => {
  beforeAll(() => {
    server.listen(process.env.PUERTO); 
  });

  afterAll((done) => {
    server.close(done);
});
    beforeEach(() => {
      
      cita.length = 0;
    });
  
    it('debería agregar una nueva cita', async () => {
      const body = {
        id: '1',
        fecha:"08/01/2025",
        hora:  "12 A.M",
        sintomaspresentados:"Dolor de cabeza, dolor muscular"
      };
  
      const response = await request(app).post('/cita').send(body);
  
      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        message: 'Datos guardados',
        response: body,
      });
  
      expect(cita).toHaveLength(1);
      expect(cita[0]).toEqual(body);
    });
  });
  
  

  
  
  
  
  