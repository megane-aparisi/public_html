<?php

namespace Motopayan;

require'vendor/autoload.php';

Router::load('routes.php')->direct(Request::uri(), Request::method());