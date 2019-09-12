<?php


namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;


class HomeController extends AbstractController
{

    /**
     *
     * @Route("/{vueRouting}" ,requirements={"vueRouting"="^(?!api|connect|_(profiler|wdt)).*"}, name ="home")
     *
     */
    public function HomeAction()
    {
        return $this->render('home.html.twig'
        );
    }
}