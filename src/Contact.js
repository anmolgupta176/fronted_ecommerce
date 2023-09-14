import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
  height: 100vh;
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return( <Wrapper>
    <h2 className="common-heading">Contact Page</h2>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.5442053727666!2d84.90979601744384!3d26.6630723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993351c5d0c6625%3A0x7802e0d412b1a1a!2sShri%20Anand%20Vastralay!5e0!3m2!1sen!2sin!4v1673186003089!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/myyaybak" method="POST" className="contact-inputs">
          <input 
            type='text'
            placeholder='username'
            name='username'
            autoComplete="off"
            required
           
             />
          <input 
            type='email'
            placeholder='Email'
            name='Email'
            autoComplete="off"
            required
           
             />

             <input type="submit" value='SEND' />
        </form>
      </div>
    </div>
  </Wrapper>
  );
};

export default Contact;
