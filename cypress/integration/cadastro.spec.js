import signup from '../pages/SignupPage'

describe('Cadastro', ()=> {
    it('Usuario deve se tornar um entregador', ()=> {
        var deliver = {
            name: 'Lucas Pereira',
            cpf: '10903587589',
            email: 'lucas@gmail.com',
            whatsapp: '11999999999',
            address: {
                postalcode: '88350610',
                street: 'Rua Frederico Petrusky',
                number: '1347',
                details: 'Casa',
                district: 'Guarani',
                city_state: 'Brusque/SC', 
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
        
    })

    it('CPF Incorreto', ()=> {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
        
        var deliver = {
            name: 'Lucas Pereira',
            cpf: '10903587AAD',
            email: 'lucas@gmail.com',
            whatsapp: '11999999999',
            address: {
                postalcode: '88350610',
                street: 'Rua Frederico Petrusky',
                number: '1347',
                details: 'Casa',
                district: 'Guarani',
                city_state: 'Brusque/SC', 
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
       
    })

})