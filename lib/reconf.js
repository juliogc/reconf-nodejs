/*
 *   Copyright 2013-2015 Blocks4J Team (www.blocks4j.org)
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 *
 *   @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *   @link          http://www.blocks4j.org
 *   @since         1.0.0
 *   @license       http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 */

'use strict';

function ReConf () {}

/**
 *   @method {static} getInstance
 *   Get instance from the ReConf singleton class
 *
 *   @return ReConf
 */
ReConf.getInstance = () => {
    if (!ReConf.__instance__) {
        ReConf.__instance__ = new ReConf();
    }

    return ReConf.__instance__;
};

/**
 *   @method {static} method
 *   Add new methods in ReConf singleton instance
 *   in the application run time
 *
 *   @param {String} methodName
 *   @param {Function} methodImpl
 *   @return undefined
 */
ReConf.set = (methodName, methodImpl) => {
    let reconf = ReConf.getInstance();

    reconf[methodName] = methodImpl;
};


module.exports = ReConf;