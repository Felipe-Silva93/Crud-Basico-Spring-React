package meu.crud.crud.seguranca;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
public class Seguranca extends WebSecurityConfigurerAdapter {

	private @Autowired UserDetailImplementeService service;
	
	@Override
 	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		
 		auth.inMemoryAuthentication().withUser("admin").password(passwordEnconder().encode("admin")).authorities("ROLE_ADMIN");//autenticação em memoria
 		
 		auth.userDetailsService(service);//autenticação em banco
 	}
	
 	/*
 	 * autenticando em memoria
 	 * gg
 	 * @Override
 	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
 		auth.inMemoryAuthentication().withUser("admin").password(passwordEnconder().encode("admin")).authorities("ROLE_ADMIN");
 	}*/
 	
	@Bean
	public PasswordEncoder passwordEnconder() {
		return new BCryptPasswordEncoder();
	}
	
	
	
	//metodo para autorizar rotas de acesso
	@Override
 	protected void configure(HttpSecurity http) throws Exception {
 		http.authorizeRequests()
 			.antMatchers(HttpMethod.POST,"/crud/cadastrar").permitAll()
 			.antMatchers(HttpMethod.PUT,"/crud/logar").permitAll()
 			.anyRequest().authenticated()
 			.and().httpBasic()
 			.and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
 			.and().cors()
 			.and().csrf().disable();
 	}
	
}
