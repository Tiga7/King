package com.kob.backend.config.userutils;


import com.kob.backend.pojo.OrdinaryUser;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;


public class GetLoginUser {

    public static OrdinaryUser getUser() {
        UsernamePasswordAuthenticationToken authenticationToken =
                (UsernamePasswordAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();
        //会进数据库查询
        UserDetailsImpl loginUser = (UserDetailsImpl) authenticationToken.getPrincipal();

        OrdinaryUser user = loginUser.getUser();
        return user;
    }
}
