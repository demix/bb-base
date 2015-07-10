var Base = {
    initialize: function(){
        this.stateMachine = {};
        this.stateMachine.destroy = this.stateMachine.fetch = StateMachine.create({
            initial: 'unlock',
            events: [{
                name: 'lock',
                from: 'unlock',
                to: 'lock'
            }, {
                name: 'unlock',
                from: 'lock',
                to: 'unlock'
            }]
        });
    },

    _baseFetchOption: {
        type: 'POST',
        dataType: 'json'
    },
    fetchEnd: false,
    fetchOption: {},
    fetchData: {},
    fetchSuccess: function(){},
    fetchError: function(){},
    fetchFail:function(){},
    fetchComplete: function(){
        this.stateMachine.fetch.unlock();
    },
    destroyComplete: function(){
        this.stateMachine.destroy.unlock();
    },

    fetch: function(data){
        if(this.fetchEnd)
            return;
        if (this.stateMachine.fetch.current == 'lock')
            return;
        this.stateMachine.fetch.lock();

        var options = {};
        options = _.merge({}, this._baseFetchOption, this.fetchOption);
        options.success = function(res){
            if(+res.ret != 1){
                this.fetchFail.apply(this, res , data);
            }else{
                this.fetchSuccess.call(this, res.data);
            }
        }.bind(this);
        options.error = function(){
            this.fetchError.apply(this, arguments);
        }.bind(this);
        options.complete = this.fetchComplete.bind(this);

        data = _.merge({}, this.getFetchData(), data);

        options.data = JSON.stringify(data);
        Backbone.sync.call(this, 'read', this, options);
    }
};

exports.Model = Backbone.Model.extend(Base);


exports.Collection = Backbone.Collection.extend(Base);
