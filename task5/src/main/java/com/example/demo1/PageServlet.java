package com.example.demo1;

import java.io.*;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet(name = "pageServlet", value = "/page")
public class PageServlet extends HttpServlet {
    private static final String PAGE_PATH = "/WEB-INF/page.html";

    public void init() {
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        RequestDispatcher dispatcher =  request.getRequestDispatcher(PAGE_PATH);
        dispatcher.forward(request, response);
    }

    public void destroy() {
    }
}
