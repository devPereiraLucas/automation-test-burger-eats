import { faker } from '@faker-js/faker';
import { generate } from 'gerador-validador-cpf'

export default {
    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName() 

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: generate(),
            email: faker.internet.email(firstName),
            whatsapp: faker.phone.number('###########'),
            address: {
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'Ap 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
                },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}