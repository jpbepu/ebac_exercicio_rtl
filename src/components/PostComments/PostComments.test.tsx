import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComments from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComments/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve criar 2 posts', () => {
        render(<PostComments/>);

        fireEvent.change(screen.getByTestId('temp-comment'), {
            target:{
                value:'comentario teste 1'
            }
        })

        fireEvent.click(screen.getByTestId('submit-btn'))

        fireEvent.change(screen.getByTestId('temp-comment'), {
            target:{
                value:'comentario teste 2'
            }
        })

        fireEvent.click(screen.getByTestId('submit-btn'))

        expect(screen.getAllByTestId('test-comment')).toHaveLength(2);
    });

});