class WelcomeController < ApplicationController
  def index
    @homeland = 'Long Island'
    @countries = %w[Ireland New\ Zealand France Cape\ Town]
    @images = %w[ireland.jpg new_zealand.jpg paris.jpg cape_town.jpg]

  end

  def about
    @color = params[:color]
    @size = params[:size].to_i
  end

  def contact
  end
end
